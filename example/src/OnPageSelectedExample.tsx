import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Animated,
} from 'react-native';

import ViewPager from 'react-native-pager-view';
import { NavigationPanel } from './component/NavigationPanel';
import { useNavigationPanel } from './hook/useNavigationPanel';

const AnimatedViewPager = Animated.createAnimatedComponent(ViewPager);

export const OnPageSelectedExample = () => {
  const callback = React.useCallback((position: number) => {
    Alert.alert('Hey', `You are on ${position + 1} page`);
  }, []);
  const { ref, ...navigationPanel } = useNavigationPanel(10, callback);

  return (
    <SafeAreaView style={styles.flex}>
      <AnimatedViewPager
        {...navigationPanel}
        ref={ref}
        style={styles.flex}
        initialPage={0}
      >
        {navigationPanel.pages.map(({ key, style }) => (
          <View key={key} style={[style, styles.center]}>
            <Text style={styles.text}>{`Page Index: ${key}`}</Text>
          </View>
        ))}
      </AnimatedViewPager>
      <NavigationPanel {...navigationPanel} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
});
