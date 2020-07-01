/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {damage, magic, difficulty, defense} from '../assets';

const mapStateToProps = (state) => ({
  champions: state.champions,
});

const ChampionDescription = (props) => {
  const champ = props.navigation.getParam('champ');
  return (
    <ImageBackground
      source={{
        uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`,
      }}
      style={{
        flex: 1,
        height: 'auto',
        width: 'auto',
      }}>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 45,
          }}>
          <Logo>LoLStats</Logo>
          <Icon name="equalizer" color="white" size={45} />
        </View>
        <View style={{marginTop: 30, alignItems: 'center'}}></View>
        <ChampName>{champ.name.toUpperCase()}</ChampName>
        <ChampName style={{fontSize: 16}}>
          {champ.title.toUpperCase()}
        </ChampName>
        <ChampDesc>{champ.blurb}</ChampDesc>
        <ChampInfo>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <StatsWrapper>
              <Image source={damage} />
              <Damage>Attack {champ.info.attack}</Damage>
            </StatsWrapper>
            <StatsWrapper>
              <Image source={defense} />
              <Defense>Defense {champ.info.defense}</Defense>
            </StatsWrapper>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <StatsWrapper>
              <Image source={magic} />
              <Magic>Magic {champ.info.magic}</Magic>
            </StatsWrapper>
            <StatsWrapper>
              <Image source={difficulty} />
              <Difficulty>Difficulty {champ.info.difficulty}</Difficulty>
            </StatsWrapper>
          </View>
        </ChampInfo>
        <ChampTag>{champ.tags.map((el) => el + ' ')}</ChampTag>
      </Container>
    </ImageBackground>
  );
};

const Container = styled(View)`
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
`;

const Logo = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 39;
  color: white;
`;

const ChampName = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 30;
  color: white;
`;

const ChampDesc = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 18px;
  color: white;
  text-align: center;
  margin-top: 85;
  margin-bottom: 10;
  padding: 10px;
  border-radius: 13;
  background-color: rgba(112, 112, 112, 0.7);
`;

const ChampInfo = styled(View)`
  border-radius: 13;
  min-width: 100%;
  font-family: 'Segoe-UI-Bold';
  background-color: rgba(112, 112, 112, 0.7);
`;

const Damage = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 14px;
  color: #f1c354;
`;

const Defense = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 14px;
  color: #f7715a;
`;

const Magic = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 14px;
  color: #8445ff;
`;

const Difficulty = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 14px;
  color: #ded3c6;
`;

const StatsWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
`;

const ChampTag = styled(Text)`
  font-family: 'Segoe-UI-Bold';
  font-size: 15px;
  color: white;
  text-align: center;
  margin-top: 13;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 60px;
  padding-left: 60px;
  border-radius: 13;
  background-color: rgba(112, 112, 112, 0.7);
`;

export default connect(mapStateToProps, null)(ChampionDescription);
