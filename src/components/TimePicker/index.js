import {
    Platform,
    Pressable,
    Text,
    View,
    Modal,
} from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { estilos } from './estilos'

export default function TimePicker(props) {

    const { tipoDate } = props

    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)

    const estilo = estilos(props.temaEscolhido)


    const onChange = (e, selectedDate) => {
        setDate(new Date(selectedDate))
    }

    const onAndroidChange = (e, selectedDate) => {
        setShow(false)
        if (selectedDate) {
            setDate(new Date(selectedDate))
        }
    }

    const renderDatePicker = () => {
        return (
            <>
                <DateTimePicker
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={tipoDate}
                    onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
                />
            </>
        )
    }

    return (
        <Pressable
            onPress={() => setShow(true)}
            activeOpacity={0}
        >
            <View>
                <Text style={estilo.data}>{`${date.getHours()+3}:${date.getMinutes()}`}</Text>
                {Platform.OS !== 'ios' && show && renderDatePicker()}

                {Platform.OS === 'ios' && (
                    <Modal
                        transparent={true}
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(!show)}
                    />
                )}
            </View>
        </Pressable>
    )
}



