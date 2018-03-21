import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModalComponent } from './share-modal.component';
import { MAT_DIALOG_DATA, MatFormFieldModule, MatDialogRef, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShareModalComponent', () => {
  let component: ShareModalComponent;
  let fixture: ComponentFixture<ShareModalComponent>;

  const matDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClose']);
  const matDialogData = jasmine.createSpyObj('MAT_DIALOG_DATA', ['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ ShareModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: matDialogData }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
