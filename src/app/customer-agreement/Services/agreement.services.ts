import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { customer } from './customer';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class AgreementServices {

  private agreementServicesUrl = '';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes (): Observable<customer[]> {
    return this.http.get<customer[]>(this.agreementServicesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<customer[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<customer> {
    const url = `${this.agreementServicesUrl}/?id=${id}`;
    return this.http.get<customer[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<customer>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<customer> {
    const url = `${this.agreementServicesUrl}/${id}`;
    return this.http.get<customer>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<customer>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<customer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<customer[]>(`${this.agreementServicesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<customer[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: customer): Observable<customer> {
    return this.http.post<customer>(this.agreementServicesUrl, hero, httpOptions).pipe(
      tap((newHero: customer) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<customer>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: customer | number): Observable<customer> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.agreementServicesUrl}/${id}`;

    return this.http.delete<customer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<customer>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: customer): Observable<any> {
    return this.http.put(this.agreementServicesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
