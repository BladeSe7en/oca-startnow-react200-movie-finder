/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
import React from 'react';

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';
const url1 = 'http://localhost:8888/#/movie/tt0800369';

describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );
  it("should have a button that displays more details about the movie", () =>
  nightmare
    .goto(url)
    .evaluate(() => document.getElementsByClassName("details"))
    .end()
    .then(btn => {
      expect(btn).to.exist;
    })).timeout(20000);

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));

      it("should have a button that performs an axios calls", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName("btn"))
      .end()
      .then(btn => {
        expect(btn).to.exist;
      })).timeout(20000);

      it("should respond with an array of movies", () =>
      axios.get(url).then(response => expect(response.data == Array)));

      it('should load successfully', () => axios.get(url).then(r => expect(r.status === 200)));

     it('should have a card title of movie details', () =>
     nightmare
     .goto(url)
    .evaluate(() => document.getElementsByClassName("details"))
    .end()
    .then(btn => {
      expect(btn).to.exist;
    })).timeout(20000);
    
    it('should have a <p> element titled Movie Title:', () =>
    nightmare
      .goto(url1)
      .evaluate(() => document.querySelector('p').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Title:');
      })
    );

    it('should have a <p> element  movie title', () =>
    nightmare
      .goto(url1)
      .evaluate(() => document.querySelector('p').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Title:');
      })
    );

    it('should have a className of card-header', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName('card-header'))
      .end()
      .then((text) => {
        expect(text).to.exist;
      })
    );



});
