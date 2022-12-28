import React, { Component } from "react";
import Button from "./button"

export default class Card extends Component {
  // when you map the elements in the main app, maybe create an ID as you loop
  // then maybe access them somehow here
  render() {
    return (
      <div
        className="projjy relative mt-12 justify-self-center mb-12">
        <div className="relative z-10">
          <img
            className="w-20 h-20 -mt-6 -ml-6 md:-mt-10 md:-ml-10 absolute inline-block lang "
            src={this.props.lang}
            alt="Language or framework logo" />
        </div>
        <div class="bg-accent2 flex flex-col md:flex-row rounded-2xl shadow-lg max-w-sm md:max-w-4xl">
          <img class="w-full h-full md:w-72 self-center h-72" src={this.props.img} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div className="flex flex-row self-center justify-between mb-2">
              <h1 className="text-gray-200 text-3xl">{this.props.title}</h1>
              <div className="ml-2 self-center">
                <a href={this.props.link}>
                  <Button />
                </a>

              </div>
            </div>
            <p class="text-gray-400 italic text-xl">
              {this.props.description}
            </p>

          </div>
        </div>
      </div>

    );
  }

}