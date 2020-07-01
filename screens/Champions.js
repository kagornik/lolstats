/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {Background} from '../assets';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  champions: state.champions,
});

const Champions = (props) => {
  return (
    <ImageBackground
      source={Background}
      style={{
        flex: 1,
        height: 'auto',
        width: 'auto',
      }}>
      <Container>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 45}}>
          <Logo>LoLStats</Logo>
          <Icon name="equalizer" color="white" size={45} />
        </View>
        <ChampsText>
          <TextMenu>Champions</TextMenu>
        </ChampsText>
        <ScrollView style={{width: '100%'}}>
          {Object.keys(props.champions)
            .reduce(function (tab, element) {
              tab.push(props.champions[element]);
              return tab;
            }, [])
            .map((element, key) => (
              <ChampContainer
                onPress={() =>
                  props.navigation.navigate('ChampionDescription', {
                    champ: element,
                  })
                }
                key={key}>
                <ChampImg
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${element.id}.png`,
                  }}
                />
                <ChampName>{element.name}</ChampName>
              </ChampContainer>
            ))}
        </ScrollView>
      </Container>
    </ImageBackground>
  );
};

const Container = styled(View)`
  align-items: center;
`;

const Logo = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 39;
  color: white;
`;
const ChampsText = styled(View)`
  width: 100%;
  background-color: #e7514a;
  padding: 15px;
  margin-top: 35px;
`;
const TextMenu = styled(Text)`
  color: white;
  font-size: 26;
  align-self: center;
  font-family: 'Segoe-UI-Bold';
`;

const ChampName = styled(Text)`
  color: white;
  font-size: 24;
  font-family: 'Segoe-UI-Bold-Italic';
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ChampContainer = styled(TouchableOpacity)`
  background-color: rgba(76, 108, 157, 0.5);
  border-radius: 24;
  margin: 6px 13% 6px 13%;
  flex-direction: row;
`;

const ChampImg = styled(Image)`
  height: 56;
  width: 56;
  border-radius: 34;
  border-width: 2;
  border-color: #e7514a;
`;
export default connect(mapStateToProps, null)(Champions);
