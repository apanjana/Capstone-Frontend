import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; // Add form-related imports

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [ReactiveFormsModule] // Import ReactiveFormsModule for future use
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map: any;
  private route: any = null; // Route object to hold the displayed route
  private L: any; // Store Leaflet object for use in the component

  // Hardcoded coordinates for initial route
  coordinates = [
    { value: '8.55692804099691,76.8810316763329' }, // Example start location
    { value: '8.54692804099691,76.8610316763329' }  // Example destination
  ];

  // Geoapify API Key
  private apiKey = 'bb18bd8dc88741c0b088d5c4ed994055'; // Replace with your actual API key

  // Placeholder for form management in future (e.g., form for entering start and end locations)
  routeForm: FormGroup = new FormGroup({
    startLocation: new FormControl(''), // Future form fields
    endLocation: new FormControl('')
  });

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        this.L = await import('leaflet');
        this.initMap();
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    }
  }

  private initMap(): void {
    if (!this.L) {
      console.error('Leaflet not loaded properly');
      return;
    }

    if (!this.mapContainer || !this.mapContainer.nativeElement) {
      console.error('Map container not found');
      return;
    }

    // Initialize the map with a default location
    this.map = this.L.map(this.mapContainer.nativeElement).setView([8.55692804099691, 76.8810316763329], 16);

    // Load tiles from OpenStreetMap
    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Display the route using hardcoded coordinates
    this.getRoute();
  }

  getRoute(): void {
    // Hardcoded start and end coordinates for now
    const start = this.coordinates[0].value;
    const end = this.coordinates[1].value;

    const waypoints = `${start}|${end}`;

    const url = `https://api.geoapify.com/v1/routing?waypoints=${waypoints}&mode=drive&apiKey=${this.apiKey}`;

    this.http.get<RouteResponse>(url).subscribe((data) => {
      console.log('Full API response:', data);
      console.log('Features:', data.features);
      if (data.features && data.features.length > 0) {
        console.log('First feature:', data.features[0]);
        console.log('First feature properties:', data.features[0].properties);
        console.log('Segments:', data.features[0].properties?.segments);
      }

      console.log(data.features);

      // Parse the route geometry from the API response
      const routeCoordinates = data.features[0].geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]]);
      console.log(routeCoordinates);

      // Draw the route on the map with highlighted features
      this.route = this.L.polyline(routeCoordinates, {
        color: 'blue',
        weight: 5,
        dashArray: '5,10', // Optionally, use dash pattern for highlighting
      }).addTo(this.map);
      this.map.fitBounds(this.route.getBounds());
      console.log('data' , data);
      if (data && data.features && data.features.length > 0 && data.features[0].properties && Array.isArray(data.features[0].properties.segments)) {
        data.features[0].properties.segments.forEach((segment: any) => {
          if (segment && segment.geometry && Array.isArray(segment.geometry.coordinates)) {
            const segmentCoordinates = segment.geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]]);
            const roadColor = segment.speed > 80 ? 'red' : 'green';
            this.L.polyline(segmentCoordinates, { color: roadColor, weight: 3 }).addTo(this.map);
          } else {
            console.warn('Skipping invalid segment:', segment);
          }
        });
      } else {
        console.error('Expected data structure is not present:', data);
      }

      // Add markers for start and end locations
      this.addMarkers(start, end);
    }, error => {
      console.error('Error fetching route:', error);
      alert('An error occurred while fetching the route. Please try again.');
    });
  }

  // Add markers for the start and end locations
  private addMarkers(start: string, end: string) {
    const [startLat, startLng] = start.split(',').map(Number);
    const [endLat, endLng] = end.split(',').map(Number);

    this.L.marker([startLat, startLng]).addTo(this.map).bindPopup('Start Location').openPopup();
    this.L.marker([endLat, endLng]).addTo(this.map).bindPopup('End Location').openPopup();
  }
}

interface RouteResponse {
  features: Array<{
    geometry: {
      coordinates: number[][];
    };
    properties: {
      segments: Array<{
        geometry: {
          coordinates: number[][];
        };
        speed: number;
      }>;
    };
  }>;
}
