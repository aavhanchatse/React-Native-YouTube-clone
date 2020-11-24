//import liraries
import React, {Component} from 'react';
import {Image, Dimensions, TouchableOpacity} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Content,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// create a component
const CardComponent = ({id, title, channel}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('VideoPlayer', {id: id})}>
      <Card
        style={{
          elevation: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginTop: 0,
        }}>
        <CardItem cardBody>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>

        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADr6+v09PT5+fnj4+P39/fs7OzQ0NBISEjHx8e+vr7n5+fk5OQlJSXd3d20tLTW1tYbGxt1dXVbW1uYmJgzMzNBQUGcnJxkZGSioqKamppubm4UFBTFxcV8fHyFhYUpKSmNjY1dXV2rq6s7OztTU1OCgoIYGBgvLy9FRUUnJye4uLjsjM7WAAAIt0lEQVR4nO2diX7aMAyHmwtCQknD1UJDOXrQdrz/863pysZYg6W/ZIfx8/cAOMKJbstXVx6Px+PxeDwej8fj8Xg8HOI4CpOiTMsiCaM4bvtxFAmLbL6qeuvgb9a9anufF2Hbjyejn01mt8Fpbmeb7LrtB4UIb0bH29bMoLr5vzazk24GZOn2LDZZp+0Hp9HJRmzp9oweorYf30ha8XfvkGGVti3CKaK5TLwvIe/OdSML/O08ZlS2Lcw3ZGM1+WpesrYFOiJ7V5Wv5vahbaEOSE1mHWN6LvtY6L6fh4zP4XuMttbkq1m2rlefrMpX89SqfEnPuoBB8J60J+CdA/lqJi3JF7rYwF/0+m0IeONMvpob5/J1KqcCBkHlOLRKpo4FDII3pwrnwbl8Nbk7ATetCOhQp+pFSVxGTuSLX1oT8COocpBnjdzrmEOm1v3UrkaeQsLActoxHLYsYBC8WvVv+nIBF+JfGFrcxe6r4MF69/neZif5ROLTDru2BIzwb3CWH2uIKJ/BvzawpG5iWItuvv90+rDnMLVjNFA7OGr+x6Ml+JsvNgQEPZnn08mk8hn7WQvezQR7kqXxh8Ft3GgLmGPPQQlcwVBaOdJIsKegpa3BWEw1XuxgapSas86gX59qRv1YyoL+HmHfQKUnIPalcOJVLC+plp7qQ8uPWWtgDo6Whwr5kAue89iFPPKejoD3yNrscgNWALnTEBAzFM/sdTDnRsNkYNVdfnETMxkK7yn29kyBlTCbKy6+RdCy0LpgKVIaK4J+MeJudLCltjIBS2xVzNsAiz2FSEKwCQFzNsAgg+daHJFia4I6HAxgAkknHJiZAdMoaCKIb3t/g5ko/L1BM0F4ZxHa6mROXXwPWtS6RQVEtxD2FjEPOMA3Ee7mQuM2uPkB/CxAWxjgSSIw3RWgNhEv9bqXEEqfgh5pjfO3FPNO5/hyzjVNEMyB5QTFXtfW4oMBfzXUYatB6yaSHgi+6ybp6kK9tjfBmuxwJhLVs9163p8MubpG1tflNHr6guvXyPqenEbAXzBNIphR+A1ingQG+BNe5gR2ur9AXlNpSy5Pm0q7D98ACSWatIZXFRZ3BvHjGXHPKsvoh9LVgKAUbFk4gFOJUuhS536JCkdTOEsq9MgueOpUqkhrOPZCo8WS55xqnA77QV8OK/oeY7/KfQy9L1NqDb/YkRfEg/u/oCtwsP8JXlHpH2W8NXhf5BG0hI3SDgbBjCyh3qFXSh1R7wgj2QjL7f0fzNU9zTOo1P6PQnHN4O20Q1yuNRejRt5q38Uvls3/bBftoG2AmqhVPxra1AW90l6Imsa0cDp7nB8np+LcwiH3FVFCO4cnXyZ5GEVxHEdRmE/sHJ6iZk/0J0D8ZjB9nlo8dkPtH1rbewTLrGkCxm0/pwBaKvryJdQIRtuCFnZrOm2uobltovJBy9Bm26m6pY6h1fPxDoX2oU3skdRG24aW2b/8Pbz87/Dydenl28PL92ku3y+9fAmv1tYeYPE6WA9e5WMVmqCWntVneC3eZ9v5Q1lc12mMKAqvi/JhvjUOUeZDjfFV8zSzza7f9P1H/XyiVkGooeZptHJt0xVpwnN3t5U2KexZESXUyJc+j3JOWb2bjzQm+1DzpeKcd2+CdCUX92IFQB3qKnNMp3f4iJz+fC1am1q3ELhti43snNWHV7wSDMEhnz1G1XhvpzEEIN6hbyu9iQfT4DO9kbgp+ATkBZA6/qPuWMMCkZFex+d3Doyln9+/lPziDb0Xg9tPM7AzejvnNi4xlPgP1g+vbI36i3neFaMnitXX9mrzMoOUE4dw+toYvYlju7NhO4xKMac3kW7zV5Yk+wO92M+adEKt06pM3jBAPQ3FOxhE7PNGzlPxIcY6vD5vmkVUnyjWAO1F5Wk80nmLR0sC/QtJ3TBVHsVeuLu2gJLC5R4jJbymLsekE/oXuecfzGfXiJ0dShgduAHbLhsTbm4n3Rs3kX+YzFgndXu/n1H1Ab6j4b1QHHhHwhAvcrzuPYaz3K5v1TBE5YjvYdDQDsf4f2JIcUKW67RJdH1P0Wm9gI2kPZ02defQ/OLx5NOASZTTvpIbr3vPaa2Ajvwx+DUu7wwxdE/AQ4ZONwu/ubOIhlkE7/APGzaRnoCVYjCGghvoDCdXXdlEgy0UzPoyum5ujOLO8BSiZJ8p9HRxQ6EpkJPZLWMp0b7hNzYSCgsKpoNJC9s2IzHlhIWzLwn5A/2azCHmerQ4l2LOH9h8Uc0CKlwAaS7I2itcmNuVNeZdE9pNbSU0COUTFTVASDnbMf2EUrRSVYHQODDTr0B1CHVupZnspErUUFulJmvCqmo3P5HKibq32pKOsNOHNhghdSu+0NrIKfRJhQrNdB/xjhKtsJ82g0D30qdr0pqmq49olMSWLL1X5hNqv2IlvROtS+2SUI/cyH1SK4mCC8lVewsmmN6BAsvYpQ9Rs3IjKaML6xFxVUtGK5to0nwjrJHpvSfeRoZPnJZLS3fnce8/fMypWod7F6Kt+w8/vhPuOIT3udn3T1i7V2Pzmk7kotVqnkbfv1RxlM6BNlKbAsJ3yb7NlpNdWST9sNvthv2kKHeT5Qw7ZWFXQPF9wIvFcCE79jSwds3qnou/0/nj67EwOYeMi3u5ry7/bvUrvZl8XBx2R4jnxUI4bY64lk+M5TJVjgdNxHbGZTVT2e0n/w5TVU8Xt110X4Tq54Ub6Vn2YxpRH87XgOsOswMSF9v47rKt5V/0ho82oZtpBogsTFk8YOmumbyZ4nTLmQQLh/4wUv3pCDXPNs+Mccn0p0neuuhk4ZDpvqvjc5OvptCLqkbn8v0dE801Blz8uDsH/dlIWckSOcPqnNTL93Qy/G0dPZz19v2hk274O/m6ydwHSBLCmyX9oxyMSJNszo8wuzeOSrqdbTLH0bs2YZLNV1VvfSTZuldt7/PCen7XIXH8OQIr/RyIFbs9F+bxeDwej8fj8Xg8Ho/n/+cn0AuTnFNL39kAAAAASUVORK5CYII=',
              }}
            />
            <Body>
              <Text numberOfLines={2}>{title}</Text>
              <Text numberOfLines={1} note>
                {channel}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default CardComponent;
