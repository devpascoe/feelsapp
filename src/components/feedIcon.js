import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {G, Path, Line, Rect} from 'react-native-svg';

function FeedIcon(props) {
  const {color, size} = props;
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Svg width={size} height={size} viewBox="0 0 32 32">
        <G>
          <Path
            d="M27,5V3H1v26   c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z"
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />

          <Rect
            fill="none"
            height="8"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            width="10"
            x="5"
            y="19"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="27"
            x2="27"
            y1="5"
            y2="24"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="27"
            x2="27"
            y1="26"
            y2="28"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="4"
            x2="24"
            y1="11"
            y2="11"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="4"
            x2="24"
            y1="7"
            y2="7"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="4"
            x2="24"
            y1="15"
            y2="15"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="18"
            x2="24"
            y1="19"
            y2="19"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="18"
            x2="24"
            y1="23"
            y2="23"
          />

          <Line
            fill="none"
            stroke={color}
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="18"
            x2="24"
            y1="27"
            y2="27"
          />
        </G>
      </Svg>
    </View>
  );
}

export default FeedIcon;
