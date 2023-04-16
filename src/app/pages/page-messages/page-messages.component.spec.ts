import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMessagesComponent } from './page-messages.component';
import { MessageService } from 'src/app/core/services/message.service';
import { NotificationService } from 'src/app/core/services/notification.service';

describe('PageMessagesComponent', () => {
  let component: PageMessagesComponent;
  let fixture: ComponentFixture<PageMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageMessagesComponent
       ],
       providers:[
        {
          provide:MessageService,
          useValue:{}
        },
        {
          provide:NotificationService,
          useValue:{}
        }
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
