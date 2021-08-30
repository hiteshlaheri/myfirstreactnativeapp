import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';


export const UserListView = (props) => {
 
  
//   const array = [
//     {
//       id: '1',
//       title: 'example title 1',
//       subtitle: 'example subtitle 1',
//     },
//     {
//       id: '2',
//       title: 'example title 2',
//       subtitle: 'example subtitle 2',
//     },
//     {
//       id: '3',
//       title: 'example title 3',
//       subtitle: 'example subtitle 3',
//     },
//     {
//         id: '4',
//         title: 'example title 4',
//         subtitle: 'example subtitle 4',
//       },
//   ];

const usersel=useSelector(state=>state);

console.log('test',usersel.user);
const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      alignItems:'center',
      flex:1
    
    },
    headerText:{
      fontSize:40,
      fontWeight:'bold',
  
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10
    }
  });


  const list = () => {
    return  usersel.user.map((element,index) => {
      
      return (
        <View key={index} id={element.id} style={{margin: 10,borderRadius:10,borderWidth:1}}>
          <Text>{element.first_name}</Text>
          <Text>{element.last_name}</Text>
          <TouchableOpacity onPress={()=>{
            // console.log(props);
                props.parentprops.remove(index);
          }
           } style={styles.button}>
          <Text >
              Remove
          </Text>
          </TouchableOpacity>
        </View>
        // <Text>test</Text>
      );
    });
  };


  return (
      <View>
       { list()}
      </View>
    

  );

};
