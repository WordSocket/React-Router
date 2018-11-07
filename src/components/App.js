import {Component} from 'react';
import React from 'react';

export class Lb extends Component {
  render() {
    return (
      <div>
        <h2>李白</h2>
        <p>天门中断楚江开,碧水东流至此回</p>
        <p>两岸青山相对出,孤帆一片日边来</p>
      </div>
    );
  }
}

export class Df extends Component {
  render() {
    return (
      <div>
        <h2>杜甫</h2>
        <p>天门中断楚江开,碧水东流至此回</p>
        <p>两岸青山相对出,孤帆一片日边来</p>
      </div>
    );
  }
}

export class Lsy extends Component {
  render() {
    return (
      <div>
        <h2>锦瑟</h2>
        <ol>
          <li>锦瑟无端五十弦，一弦一柱思华年</li>
          <li>庄生晓梦迷蝴蝶，望帝春心托杜鹃</li>
          <li>沧海月明珠有泪，蓝田日暖玉生烟</li>
          <li>此情可待成追忆，只是当时已惘然</li>
        </ol>
      </div>
    );
  }
}
