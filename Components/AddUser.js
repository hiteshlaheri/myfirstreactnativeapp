import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { connect} from 'react-redux';
import { UserListView } from './UserListView';
const defaultuser ={id:3,first_name:'hitesh',last_name:'laheri'}
const UserList = (props) => (
    <View style={{backgroundColor:'white'}}>
      
      <TouchableOpacity onPress={()=>{
        props.addUser(defaultuser)}}
        style={styles.button}>
          <Text style={styles.headerText}>Add User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.addUserAsync} style={styles.button}>
          <Text style={styles.headerText}>
              Add Async User
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.removeAll} style={styles.button}>
          <Text >
              Remove All
          </Text>
      </TouchableOpacity>
      <UserListView parentprops={props}/>
    </View>
  );
const mapState = (state) => ({
    user: state.user,
  });
  const mapDispatch = (dispatch) => ({
    addUser: newUser => dispatch.user.addUser(newUser),
    remove: index => dispatch.user.remove(index),
    addUserAsync: ()=>dispatch.user.addUserAsync(),
    removeAll: ()=>dispatch.user.removeAll(),
  });
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


export const UserFinalWithFn = connect(mapState, mapDispatch)(UserList);
