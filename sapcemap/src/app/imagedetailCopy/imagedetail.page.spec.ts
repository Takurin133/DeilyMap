import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagedetailCopyPage } from './imagedetail.page';

describe('ImagedetailCopyPage', () => {
  let component: ImagedetailCopyPage;
  let fixture: ComponentFixture<ImagedetailCopyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedetailCopyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagedetailCopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
