import { Injectable } from "@angular/core";
import { Place } from "./places.model";

@Injectable({
    providedIn: "root"
})

export class PlaceService {
    private places: Place[] = [
        new Place(
            'p1',
            'Serpong M-Town',
            '2BR apartmen near Summarecon Mal Serpong',
            'http://www.summareconbekasi.com/public/images/gallery/article/7082/IMG_3301-30.jpg',
            700000000
        ),
        new Place(
            'p2',
            'Scientia Residence',
            'Near UMN with many choices of foods around.',
            'https://pix10.agoda.net/hotelImages/376/3762045/3762045_17122109000060531202.jpg?s=1024x768',
            100000000
        ),
    ]
}