import  React from 'react';
import { Image,Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import exercise from './exercise';
import setPlan from './setPlan';
import measurement from './measurement';
import hireTrainer from './hireTrainer';
import contactUs from './contactUs';





const Tab = createBottomTabNavigator();

export default function dashboard() {
 
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Exercise" component={exercise} 
        options={{
          tabBarLabel:"Exercise",
          tabBarIcon:()=>(
            <Image style={{ width: 30, height: 30 }} source={{uri:'https://cdn3.iconfinder.com/data/icons/gym-and-fitness-glyph/512/Bodybuilding-dumbell-dumbells-fitness-256.png'}} />
          ),
        }
        }
        />
      
        
        <Tab.Screen name="Measurement" component={measurement} 
        options={{
          tabBarLabel:"Measurement",
          tabBarIcon:()=>(
            <Image style={{ width: 30, height: 30 }} source={{uri:'https://cdn2.iconfinder.com/data/icons/lose-gain-weight/64/BMI_Calculator-Bmi-Exercise-Obesity-Weight-2-128.png'}} />
          ),
        }
        }
        />
        <Tab.Screen name="SetPlan" component={setPlan}
         options={{
          tabBarLabel:"SetPlan",
          tabBarIcon:()=>(
            <Image style={{ width: 30, height: 30 }} source={{uri:'https://cdn1.iconfinder.com/data/icons/feather-2/24/plus-circle-256.png'}} />
          ),
        }
        }
        />
        <Tab.Screen name="HireTrainer" component={hireTrainer}
        options={{
          tabBarLabel:"HireTrainer",
          tabBarIcon:()=>(
            <Image style={{ width: 30, height: 30 }} source={{uri:'https://cdn3.iconfinder.com/data/icons/outline-location-icon-set/64/Personal_trainer_1-256.png'}} />
          ),
        }
        }
        />
        <Tab.Screen name="ContactUs" component={contactUs}
        options={{
          tabBarLabel:"ContactUs",
          tabBarIcon:()=>(
            <Image style={{ width: 30, height: 30 }} source={{uri:'https://img.icons8.com/wired/2x/phone.png'}} />
          ),
        }
        }
        />
      </Tab.Navigator>
    
  );
}