import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('screen');

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main}>
      <Modal
      animationType='fade'
        visible={modalVisible}
      >
        <View style={styles.main}>
          <View style={styles.modalTopView}>

          <TouchableOpacity style={styles.backView}
          onPress={() => {
            setModalVisible(false)
          }}
          >
            <Image style={styles.backImage} source={require('../../assets/images/icons/back-100.png')} />
          </TouchableOpacity>

          <View style={styles.modalSearch}>
            <TextInput style={styles.modalInput} 
            autoFocus={true}
            />
          <TouchableOpacity style={styles.modalMicView}>
            <Image style={styles.modalMic} source={require('../../assets/images/icons/microphone_black.png')} />
          </TouchableOpacity>
          </View>


          </View>
         
        </View>
      </Modal>

      <ScrollView bounces={false}>


        <View style={styles.search}>
          <Image style={styles.searchImage} source={require('../../assets/images/icons/search/icons8-search-90.png')} />

          <TouchableOpacity style={styles.searchTextView}
            onPress={() => {
              setModalVisible(true)
            }}
          ><Text style={styles.searchText}>{'Search by actor,title..'}</Text></TouchableOpacity>

          <TouchableOpacity style={styles.micView}>
            <Image style={styles.mic} source={require('../../assets/images/icons/icons8-microphone-96.png')} />
          </TouchableOpacity>

        </View>

        <Text style={styles.titleText}>{'Browse by'}</Text>

        <View style={styles.browseView}>
          <TouchableOpacity style={styles.browseBox}><Text style={styles.boxText}>{'Movies'}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.browseBox}><Text style={styles.boxText}>{'Amazon Orignals'}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.browseBox}><Text style={styles.boxText}>{'TV'}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.browseBox}><Text style={styles.boxText}>{'Kids'}</Text></TouchableOpacity>
        </View>

        <Text style={styles.titleText}>{'Genres'}</Text>
        <View style={styles.lastView}>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText} >{'Drama'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Action and adventure'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Romance'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Comedy'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Thriller'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Horror'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>{'Languages'}</Text>
        <View style={styles.lastView}>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText} >{'English'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Hindi'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Telugu'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Kannada'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Malayalam'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />

          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Punjabi'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Marathi'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Bangali'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}><Text style={styles.listText}>{'Gujarati'}</Text>
            <Image style={styles.arrow} source={require('../../assets/images/icons/icons8-chevron-right-96.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1d242e',
    paddingTop: 40,
    // justifyContent:'center',
    // alignItems:'center',
  },
  modalTopView: {
    // borderWidth: 1,
    // borderColor: 'white',
    height: height / 13,
    width: width,
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center'
  },
  modalSearch:{
    flexDirection:'row',
    height: height / 20,
    width: width / 1.2,
    borderRadius:3,
    backgroundColor: 'white',
    // justifyContent:'center',
    alignItems:'center',
  },
  modalInput:{
    height:'100%',
    width:'90%',
    paddingHorizontal:10,
    color:'black'
    // borderWidth:1,
    // borderColor:'black',
  },
  modalMicView:{
    // borderWidth:1,
    // borderColor:'black',
    height:'100%',
    width:'10%',
    justifyContent:'center',
    alignItems:'center',
  },
  modalMic:{
    height:'70%',
    width:'70%',
  },
  backView:{
    height: height / 20,
    width: '10%',
    // borderWidth:0.3,
    // borderColor:"grey",
    justifyContent:'center',
    alignItems:'center',
  },
  backImage:{
    height:'50%',
    width:'50%'
  },
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    height: height / 16,
    width: width / 1.1,
    backgroundColor: '#242e38',
    marginLeft: height / 50,
    marginTop: 30,
    marginBottom: 20,
    // justifyContent:'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  searchImage: {
    height: '50%',
    width: '8%',
    marginLeft: width / 30,
    // position:'absolute',
    // left:8,
  },
  searchTextView: {
    // borderWidth:1,
    // borderRadius:0.2,
    height: '100%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    // margin:10,
    // position:'absolute',
    // left:45,
  },
  searchText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '400',
  },
  micView: {
    // borderWidth:1,
    // borderColor:'white',
    marginHorizontal: width / 14,
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: "center",
  },
  mic: {
    height: '50%',
    width: '60%',

  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width / 25,
    marginVertical: 20,
  },
  browseView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: height / 5.8,
    width: width / 1.06,
    // borderWidth:2,
    // borderColor:'white',
    marginLeft: width / 30,
  },
  browseBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 14,
    width: width / 2.3,
    backgroundColor: '#10384d',
    margin: 5,
    borderRadius: 2,
  },
  boxText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  lastView: {
    marginHorizontal: width / 20,

  },
  listView: {
    height: height / 19,
    width: '100%',
    borderBottomWidth: 0.6,
    // borderTopWidth:0.6,
    borderColor: 'grey',
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listText: {
    color: 'lightgrey',
    fontWeight: '500'
  },
  arrow: {
    height: "40%",
    width: '5%',
    position: 'absolute',
    left: width - 70,
  }

})