/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, Image, ScrollView, Text} from 'react-native';
import {Background} from '../assets';
import {challenger} from '../assets';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  ranks: state.ranks,
});

const TopRankLol = (props) => {
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
        <Rank>
          <Image
            style={{
              flex: 1,
              height: 100,
              right: 20,
            }}
            source={challenger}
          />
          <TextMenu>Rank LoL</TextMenu>
        </Rank>
        <ScrollView style={{width: '100%'}}>
          {props.ranks.map((element, key) => (
            <Summoner key={key}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <SummonerName>{element.summonerName}</SummonerName>
                <View style={{flexDirection: 'row'}}>
                  <WinLos>Wins</WinLos>
                  <Wins>{element.wins}</Wins>
                  <WinLos>Losses</WinLos>
                  <Losses>{element.losses}</Losses>
                </View>
              </View>
              <LeaguePoints>{element.leaguePoints}LP</LeaguePoints>
            </Summoner>
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

const Rank = styled(View)`
  width: 100%;
  height: 110;
  background-color: #2e7c8f;
  padding: 60px;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Summoner = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 60;
  background-color: rgba(76, 108, 157, 0.5);
  margin-top: 20;
  align-items: center;
  justify-content: space-between;
`;

const SummonerName = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 22;
  color: white;
`;

const WinLos = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 12;
  color: white;
`;

const Wins = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 12;
  color: #00ff44;
  margin-left: 10;
  margin-right: 20;
`;

const Losses = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 12;
  color: #ff0000;
  margin-left: 10;
`;

const LeaguePoints = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 20;
  color: white;
  margin-right: 20;
`;

const TextMenu = styled(Text)`
  color: white;
  font-size: 26;
  font-family: 'Segoe-UI-Bold';
  flex-grow: 1;
  left: 20;
`;

export default connect(mapStateToProps, null)(TopRankLol);
