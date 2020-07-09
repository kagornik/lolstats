/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect} from 'react';
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import {Background} from '../assets';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getChampions} from '../models/champions/actions';
import {getRotation} from '../models/rotation/actions';
import {getRank} from '../models/rank/actions';
import {getRankTFT} from '../models/rankTFT/actions';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {getChampions, getRotation, getRank, getRankTFT},
    dispatch,
  );

const MainMenu = (props) => {
  useEffect(() => {
    champ();
  }, []);
  const dispatch = useDispatch();

  const champ = async () => {
    try {
      const response = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/10.8.1/data/en_US/champion.json',
      );
      if (response.status === 200) {
        rotation();
        rank();
        rankTFT();
        dispatch(getChampions(response.data.data));
      }
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const rotation = async () => {
    try {
      const response = await axios.get(
        'https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations',
        {
          headers: {
            'X-Riot-Token': 'RGAPI-d9ab0673-8925-4f21-82c6-ecbd01a8ca34',
          },
        },
      );
      if (response.status === 200) {
        dispatch(getRotation(response.data.freeChampionIds));
      }
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const rank = async () => {
    try {
      const response = await axios.get(
        'https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5',
        {
          headers: {
            'X-Riot-Token': 'RGAPI-d9ab0673-8925-4f21-82c6-ecbd01a8ca34',
          },
        },
      );
      if (response.status === 200) {
        dispatch(getRank(response.data.entries));
        console.log(response);
      }
    } catch (err) {
      console.log(err, 'error rank');
    }
  };

  const rankTFT = async () => {
    try {
      const response = await axios.get(
        'https://eun1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5',
        {
          headers: {
            'X-Riot-Token': 'RGAPI-d9ab0673-8925-4f21-82c6-ecbd01a8ca34',
          },
        },
      );
      if (response.status === 200) {
        dispatch(getRankTFT(response.data.entries));
        console.log(response);
      }
    } catch (err) {
      console.log(err, 'error rank');
    }
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
        <Lore onPress={() => props.navigation.navigate('Champions')}>
          <TextMenu>Champions and lore</TextMenu>
        </Lore>
        <FreeRotation onPress={() => props.navigation.navigate('Rotation')}>
          <TextMenu>Free rotation</TextMenu>
        </FreeRotation>
        <TopRankLol onPress={() => props.navigation.navigate('RankLoL')}>
          <TextMenu>Top rank LoL</TextMenu>
        </TopRankLol>
        <TopRankTft onPress={() => props.navigation.navigate('RankTFT')}>
          <TextMenu>Top rank TFT</TextMenu>
        </TopRankTft>
      </Container>
    </ImageBackground>
  );
};

const Container = styled(View)`
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;

const Logo = styled(Text)`
  font-family: 'Segoe-UI-Bold-Italic';
  font-size: 39;
  color: white;
`;
const Lore = styled(TouchableOpacity)`
  width: 100%;
  background-color: rgba(178, 199, 146, 0.7);
  padding: 15px;
  border-radius: 27px;
  margin-top: 60px;
`;
const TextMenu = styled(Text)`
  color: white;
  font-size: 18;
  align-self: center;
  font-family: 'Segoe-UI';
`;
const FreeRotation = styled(TouchableOpacity)`
  width: 100%;
  background-color: rgba(178, 199, 146, 0.7);
  padding: 15px;
  border-radius: 27px;
  margin-top: 40px;
`;

const TopRankLol = styled(TouchableOpacity)`
  width: 100%;
  background-color: rgba(76, 108, 157, 0.7);
  padding: 15px;
  border-radius: 27px;
  margin-top: 40px;
`;
const TopRankTft = styled(TouchableOpacity)`
  width: 100%;
  background-color: rgba(76, 108, 157, 0.7);
  padding: 15px;
  border-radius: 27px;
  margin-top: 40px;
`;

export default connect(null, mapDispatchToProps)(MainMenu);
