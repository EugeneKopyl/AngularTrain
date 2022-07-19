import { Component, OnInit } from '@angular/core';
import { Offer } from '../../app.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  offers: Offer[] = [
    {
      id: 1,
      title: 'Каталог новых авто в лизинг',
      subTitle: 'Сенсационная программа финансирования',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dicta in nemo non provident quas quia quis. Deserunt magnam rem voluptatem? Architecto illum inventore ipsam iure iusto, maiores molestias nostrum odit praesentium quae quas saepe sed similique suscipit tempora unde velit voluptas voluptatem. Laborum modi mollitia voluptas? Alias architecto commodi debitis deserunt dicta dignissimos ducimus, eaque hic iste praesentium quisquam voluptate voluptatem.',
      createdDate: new Date('2022-06-23T17:30:26.000Z'),
    },
    {
      id: 2,
      title: 'Партнерская программа финансирования',
      subTitle: 'Сенсационная программа финансирования',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dicta in nemo non provident quas quia quis. Deserunt magnam rem voluptatem? Architecto illum inventore ipsam iure iusto, maiores molestias nostrum odit praesentium quae quas saepe sed similique suscipit tempora unde velit voluptas voluptatem. Laborum modi mollitia voluptas? Alias architecto commodi debitis deserunt dicta dignissimos ducimus, eaque hic iste praesentium quisquam voluptate voluptatem.',
      createdDate: new Date('2022-06-23T17:30:26.000Z'),
    },
    {
      id: 3,
      title: 'Официальный партнер Lexus в Беларуси',
      subTitle: '',
      description: '',
      createdDate: new Date('2022-07-11T11:23:22.123Z'),
    },
    {
      id: 4,
      title: 'OfferTitle',
      subTitle: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt dicta in nemo non provident quas quia quis. Deserunt magnam rem voluptatem? Architecto illum inventore ipsam iure iusto, maiores molestias nostrum odit praesentium quae quas saepe sed similique suscipit tempora unde velit voluptas voluptatem. Laborum modi mollitia voluptas? Alias architecto commodi debitis deserunt dicta dignissimos ducimus, eaque hic iste praesentium quisquam voluptate voluptatem.',
      createdDate: new Date('2022-07-12T09:00:00.000Z'),
    },
  ];

  ngOnInit(): void {}
}
