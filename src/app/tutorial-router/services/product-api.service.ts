import { Injectable } from '@angular/core';
import { IItem } from './../defines/course.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {
	private apiUrl 	 = 'https://6083df209b2bed00170404a0.mockapi.io/angular/courses/';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(
		private _httpService: HttpClient) {
		
	}

	getAll(): Observable<IItem[]> {
		return this._httpService.get<IItem[]>(this.apiUrl)
			.pipe(
				map( response => response ),
				catchError(this.handleError<IItem[]>('getItems', []))
			);
	}
	find(id: number): Observable<IItem[]> {
		return this._httpService.get<IItem[]>(this.apiUrl+id)
			.pipe(
				map( this.extractData ),
				tap(_ => this.log(`fetched hero id=${id}`)),
				catchError(this.handleError<IItem[]>(`getHero id=${id}`)
			)
		);
	}
	
	store( course: IItem ): Observable<IItem[]> {
		return this._httpService.post<IItem[]>(this.apiUrl, course, this.httpOptions)
			.pipe(
				map( this.extractData ),
				tap( (course: any) => this.log(`added hero id=${course.id}`),
				catchError(this.handleError<IItem>('addHero'))
			)
		);
	}

	update( id: number, course: IItem ): Observable<IItem[]> {
		return this._httpService.put<IItem[]>(this.apiUrl+id, course, this.httpOptions)
			.pipe(
				map( this.extractData ),
				tap( (course: any) => this.log(`updated hero id=${course.id}`),
				catchError( this.handleError<IItem>('editItem') )
			)
		);
	}

	delete(id: number): Observable<IItem[]> {
		return this._httpService.delete<IItem[]>(this.apiUrl+id)
			.pipe(
				map( this.extractData ),
				tap( _ => this.log(`deleted hero id=${id}`) ),
				catchError( this.handleError<IItem[]>(`deleteHero id=${id}`) )
			);
	}

	getItemsNonObservable() {
		return  this._httpService.get(this.apiUrl);
	}

	private extractData(response: any) {
		return response || { };
	}
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
		  //console.error(error); // log to console instead
		  this.log(`${operation} failed: ${error.message}`);
		  //return error.message;
		  return of(result as T);
		};
	  }
	private log(message: string) {
		console.log(`CourseService: ${message}`);
	}
}