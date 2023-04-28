import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdlAuthComponent } from './bdl-auth.component';
import { AuthResponse, BdlAuthentificationService } from '../interfaces/bdl-authentification-service';
import { Observable } from 'rxjs';
import { BdlCredentials } from '../interfaces/bdl-credentials';
import { TOKEN_DEFAULT_AUTH_SERVICE } from '../tokens/default-auth-service.tokens';
import { TOKEN_AUTH_SERVICE } from '../tokens/auth-service.tokens';

const MockDefaultService: BdlAuthentificationService = {
  connect: function (credentials: BdlCredentials): Observable<AuthResponse> {
    throw new Error('Function not implemented.');
  }
}

const MockService: BdlAuthentificationService = {
  connect: function (credentials: BdlCredentials): Observable<AuthResponse> {
    throw new Error('Function not implemented.');
  }
}

fdescribe('BdlAuthComponent Genral', () => {

  describe('BdlAuthComponent Default Service', () => {
    let component: BdlAuthComponent;
    let fixture: ComponentFixture<BdlAuthComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          BdlAuthComponent
        ],
        providers: [
          {
            provide: TOKEN_DEFAULT_AUTH_SERVICE,
            useValue: MockDefaultService
          }
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(BdlAuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

    });

    it('should have an effectiveSerice as default', () => {
      expect(component.effectiveService).toBe( MockDefaultService );
    });

  });


  describe('BdlAuthComponent External Service', () => {
    let component: BdlAuthComponent;
    let fixture: ComponentFixture<BdlAuthComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          BdlAuthComponent
        ],
        providers: [
          {
            provide: TOKEN_DEFAULT_AUTH_SERVICE,
            useValue: MockDefaultService
          },
          {
            provide: TOKEN_AUTH_SERVICE,
            useValue: MockService
          }
        ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BdlAuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

    });

    it('should have an effectiveSerice as external', () => {
      expect(component.effectiveService).toBe( MockService );
    });

  });

  describe('BdlAuthComponent Should Call connect method of Service ', () => {
    let component: BdlAuthComponent;
    let fixture: ComponentFixture<BdlAuthComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          BdlAuthComponent
        ],
        providers: [
          {
            provide: TOKEN_DEFAULT_AUTH_SERVICE,
            useValue: MockDefaultService
          }
        ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BdlAuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

    });

    it('should have an call connect method of service', () => {

      spyOn(MockDefaultService, 'connect');

      component.auth()

      expect(MockDefaultService.connect).toHaveBeenCalledWith( component.authForm.value as BdlCredentials);
    });

  });
});
