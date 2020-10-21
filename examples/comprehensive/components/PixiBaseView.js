/* eslint-disable react/display-name */
import Expo from 'expo';
import { GLView } from 'expo-gl';
import React from 'react';
import { PixelRatio, View } from 'react-native';

import TouchableView from './TouchableView';

const scale = PixelRatio.get();
function scaled({ x, y }) {
  return { x: x * scale, y: y * scale };
}

const PixiBaseView = ({ app }) => {
  let action = {
    began: undefined,
    moved: undefined,
    ended: undefined,
    cancelled: undefined,
  };

  return (
    <TouchableView
      id="pixi-view"
      style={{ flex: 1, backgroundColor: 'blue' }}
      onTouchesBegan={({ locationX: x, locationY: y }) =>
        action.began && action.began(scaled({ x, y }))
      }
      onTouchesMoved={({ locationX: x, locationY: y }) =>
        action.moved && action.moved(scaled({ x, y }))
      }
      onTouchesEnded={({ locationX: x, locationY: y }) =>
        action.ended && action.ended(scaled({ x, y }))
      }
      onTouchesCancelled={({ locationX: x, locationY: y }) =>
        action.cancelled
          ? action.cancelled(scaled({ x, y }))
          : action.ended && action.ended(scaled({ x, y }))
      }>
      <View style={{ flex: 1 }}>
        <GLView
          style={{ flex: 1, borderWidth: 3 }}
          onContextCreate={async context => {
            const events = (await app(context)) || {};
            const { began, moved, ended, cancelled } = events;
            action.began = began;
            action.moved = moved;
            action.ended = ended;
            action.cancelled = cancelled;
            began();
          }}
        />
      </View>
    </TouchableView>
  );
};

export default PixiBaseView;
