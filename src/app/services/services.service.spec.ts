import { TestBed } from "@angular/core/testing";
import { Services } from "./services.service"

describe('Services', () => {
    let service: Services;

    beforeEach (() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Services)
    });
})