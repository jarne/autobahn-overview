import { ComponentFixture, TestBed } from "@angular/core/testing"

import { HighwayListComponent } from "./highway-list.component"

describe("HighwayListComponent", () => {
    let component: HighwayListComponent
    let fixture: ComponentFixture<HighwayListComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HighwayListComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(HighwayListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
