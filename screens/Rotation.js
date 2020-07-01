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
  rotations: state.rotations,
  champions: state.champions,
});

const FreeRotation = (props) => {
  const findChampion = (id) => {
    const champs = props.champions;
    return Object.keys(champs).reduce(function (tab, element) {
      if (champs[element].key === id) {
        tab.push(champs[element]);
      }
      return tab;
    }, []);
  };

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
        <Rotation>
          <TextMenu>Free rotation</TextMenu>
        </Rotation>
        <ScrollView>
          {props.rotations.map((element, key) => (
            <ChampContainer key={key}>
              <ChampImg
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${findChampion(
                    element.toString(),
                  ).map((el) => el.id)}.png`,
                }}
              />
              <ChampName>
                {findChampion(element.toString()).map((el) => el.name)}
              </ChampName>
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

const Rotation = styled(View)`
  width: 100%;
  background-color: #4f4ae7;
  padding: 15px;
  margin-top: 35px;
`;
const TextMenu = styled(Text)`
  color: white;
  font-size: 26;
  align-self: center;
  font-family: 'Segoe-UI-Bold';
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
const ChampName = styled(Text)`
  color: white;
  font-size: 24;
  font-family: 'Segoe-UI-Bold-Italic';
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default connect(mapStateToProps, null)(FreeRotation);
