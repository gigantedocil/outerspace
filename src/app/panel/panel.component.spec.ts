import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PanelComponent } from "./panel.component";
import { PanelService } from "./panel.service";
import { of } from "rxjs";
import { MatCardModule } from "@angular/material/card";

describe("PanelComponent", () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  const country = {
    name: "United States",
    country: "US",
    ip: "8.8.8.8",
    country_3: "USA"
  };

  const panelServiceMock = {
    MakeRequest: () => of([country])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [PanelComponent],
      providers: [{ provide: PanelService, useValue: panelServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should bind country data from service", () => {
    component.onMakeRequest();

    expect(component.country).toBe(country);
  });

  xit("should display country name on card", () => {
    component.onMakeRequest();

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const selector = element.querySelector("mat-card-title");
    expect(selector.textContent).toContain(country.name);
  });
});
