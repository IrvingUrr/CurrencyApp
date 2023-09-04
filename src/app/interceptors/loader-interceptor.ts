import { Injectable } from "@angular/core";
import { LoaderService } from "../services/loader/loader.service";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, finalize, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor {
    constructor(public loaderService: LoaderService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(request)
        .pipe (
            finalize(() => {
                this.loaderService.hide();
            })
        )
    }
}