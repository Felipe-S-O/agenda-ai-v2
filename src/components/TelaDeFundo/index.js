import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {estilos} from './estilos';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

const imagemFundo = require('../../assets/fundo.png');

export function TelaDeFundo( { children } ) {

  const { temaEscolhido } = useContext(TemaContext);

  const estilo = estilos(temaEscolhido)

  return (
    <LinearGradient
      colors={['rgba(237,52,86,1.0)', 'rgba(237,52,86,1.0)']}
      style={estilo.linearGradient}
    >
      <ImageBackground 
        source={imagemFundo} 
        style={estilo.image}
        imageStyle={{
          opacity: 0.2,
          resizeMode: "cover",
          height: '70%',
        }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}