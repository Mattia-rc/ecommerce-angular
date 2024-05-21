import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailProductsComponent } from './item-detail-products.component';

describe('ItemDetailProductsComponent', () => {
  let component: ItemDetailProductsComponent;
  let fixture: ComponentFixture<ItemDetailProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
