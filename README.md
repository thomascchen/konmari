# KonMari All The Things

[![MarieKondo](http://i.imgur.com/fjyl5Jc.jpg)](http://www.fastcompany.com/videos/program/the-most-creative-people-of-2015)

The "KonMari" method is an approach to clearing out clutter popularized by Japan's "queen of clean" [Marie Kondo](https://twitter.com/KonMari_Method). Use this app to liberate yourself from the Tyranny Of Stuff by quickly deciding which of your belongings to keep and discard. Add items to the list, then click begin to start the process. I used Rails API for the back end and Ember CLI for the front end, [`ActiveModel::Serializer`](https://github.com/rails-api/active_model_serializers) for the API, and Bootstrap for styling. This is my first app using Ember, and it was inspired by my impending move to a new apartment.

## Running locally
```
git clone git@github.com:thomascchen/konmari.git
cd konmari
cd frontend
npm install && bower install
..
cd backend
bundle install
rake db:create && db:migrate && db:seed
..
rake run
```
Visit to `localhost:4200` to run the app locally.

## To Dos:
1. Add images for items. I tried to implement this first with Carrierwave, but ran into some problems getting images to save locally. I then tried plain image url strings, but had trouble getting my images to load properly. I rolled this back for now.
2. Add a related table for item owners.
3. Show "Items to Keep" and "Items to Discard" on the same page. I was experimenting a bit with breaking things out into components and feel like that might be the way to go, but I'm not sure. I want to play with this some more.
4. Add tests for the API.
5. Add animations using [liquid-fire](https://github.com/ef4/liquid-fire).
6. Improve styling.
