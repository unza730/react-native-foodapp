import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from './assets/profile.png'
// Tab Icons
import home from './assets/home.png'
import search from './assets/search.png'
import notification from './assets/bell.png'
import settings from './assets/settings.png'
import logout from './assets/logout.png'
// Menu
import menu from './assets/menu.png'
import close from './assets/close.png'
// photo
import photo from './assets/photo.jpg'

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home')

  // To get the current status of menu .......
  const [showMenu, setShowMenu] = useState(false)

  // Animated Properties
  const offset = useRef(new Animated.Value(0)).current; 
  //  Scale Initially must be one ...
  const scaleValue = useRef(new Animated.Value(1)).current; 
  const closeButtonOffset = useRef(new Animated.Value(0)).current; 

  return (
    <SafeAreaView style={styles.container}>
      {/* menu side start with left side */}
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>

        {/*------ profile pic -----*/}
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>
        {/*~~~~~~~ profile pic ~~~~~~ */}

        {/*--------- name ------ */}
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Unza Sohail</Text>
        {/* ~~~~~ name ~~~~~~~~~~ */}

        {/* ---- View Profile ------- */}
        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            fontSize: 15,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>
        {/* ~~~~~~ View Profile ~~~~~~~~~ */}


        {/* ------ Tab Bar Buttons ------------ */}
        <View style={{ flexGrow: 1, marginTop: 50 }}>

          {/* ------ Menu Item --------- */}
          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Search', search)}
          {TabButton(currentTab, setCurrentTab, 'Notifications', notification)}
          {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
          {/*  ~~~~~~~~~ Menu Item ~~~~~~~~~~~ */}

        </View>
        {/* ~~~~~~~~ Tab Bar Buttons */}


        {/* -------- logout item --------*/}
        <View>
          {TabButton(currentTab, setCurrentTab, 'Logout', logout)}
        </View>
        {/* ~~~~~~~ logout item ~~~~~~~~ */}


      </View>

      {/* -------- Over Lay View ----------- */}
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        borderRadius: showMenu ? 15 : 0,
        paddingVertical: showMenu == menu ? 0 : 20,
        // Transforming View
        transform: [
          {scale: scaleValue},
          {translateX: offset}
        ]
      }}>

<Animated.View style={{
  transform: [{
    translateY: closeButtonOffset
  }]
}}>

        {/* ========= Menu Button ============ */}
        <TouchableOpacity onPress={()=> {
          //  Do Actions Here ...
          // Scaling the View ...
          Animated.timing(scaleValue, {
            toValue: showMenu? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
          })
          .start()

          Animated.timing(offset, {
            //  Your Random Value
            toValue: showMenu? 0 : 230,
            duration: 300,
            useNativeDriver: true
          })
          .start()

          Animated.timing(closeButtonOffset, {
            //  Your Random Value
            toValue: !showMenu? -30 : 0,
            duration: 300,
            useNativeDriver: true
          })
          .start()
          
          setShowMenu(!showMenu)
        }}>
          <Image source={showMenu ? close : menu} style={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginTop: 30
          }} />
        </TouchableOpacity>
        {/* ~~~~~~~~~~~~ Menu Button ~~~~~~~~~~~~~ */}


        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'blck',
          paddingTop: 20
        }}>{currentTab}</Text>
        <Image source={photo} style={{
          width: '100%',
          height: 300,
          borderRadius: 15,
          marginTop: 20
        }} />
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingTop: 15,
          paddingBottom: 8
        }}>Unza Sohail</Text>
        <Text style={{
          // fontSize: 20,
        }}>Techie Youtuber , Developer, Designer</Text>

</Animated.View>

      </Animated.View>

      {/* ~~~~~~~~~ Over Lay View ~~~~~~~~~~~~~~~~~ */}


      {/*End of menu side start with left side */}
    </SafeAreaView>
  );
}
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title == 'Logout') {
        //  Do your Stuff
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        // backgroundColor: currentTab === title ?'#E3963E' :'transparent',
        backgroundColor: currentTab === title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15

      }}>
        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? '#E3963E' : 'white'
        }}></Image>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? '#E3963E' : 'white'
        }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#CC5500',
    backgroundColor: '#CD7F32',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
