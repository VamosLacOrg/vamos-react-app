import React from 'react';
import {FlatList, Text, Linking,View} from 'react-native';
import CityItem from '../CityItem/component.js'


export default class CitiesList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      console.log('apretado');
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <CityItem
      id={item.id}
      onPressItem={this.props.onPressItem}
      selected={!!this.state.selected.get(item.id)}
      data={item}
    />
  );

  _goToSuggest = () =>{
    let url = 'https://donde.huesped.org.ar/form';
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          alignItems: 'center',
          justifyContent:'center',
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            width: "80%"
          }}
        />
      </View>
    );
  };


  _renderEmptyList = () => <Text style={{color: '#e6334c'}} onPress={this._goToSuggest}>No se encontraron establecimientos, sugiere uno</Text>

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        style={{paddingLeft:'5%'}}
        ListEmptyComponent={this._renderEmptyList}
        keyboardShouldPersistTaps='handled'
        ItemSeparatorComponent={this._renderSeparator}
        keyboardDismissMode='on-drag'
      />
    );
  }
}
