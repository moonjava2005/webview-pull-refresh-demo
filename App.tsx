/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewScrollEvent, WebViewSource } from 'react-native-webview/lib/WebViewTypes'

declare const global: { HermesInternal: null | {} }

const App = () => {
    const webViewRef = React.useRef<WebView>(null)
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true)
    const [typingAddress, setTypingAddress] = React.useState<string>('https://www.wsj.com')
    const [refreshing, setRefreshing] = React.useState<boolean>(false)
    const [source, setSource] = React.useState<WebViewSource>({
        uri: typingAddress,
    })
    const onChangeTypingAddress = React.useCallback((text) => {
        setTypingAddress(text)
    }, [])
    const onGo = React.useCallback(() => {
        let uri = typingAddress
        if (!uri?.startsWith('http://') && !uri?.startsWith('https://')) {
            uri = `http://${uri}`
            setTypingAddress(uri)
        }
        setSource({
            uri,
        })
    }, [typingAddress])
    const onRefresh = React.useCallback(() => {
        if (webViewRef.current) {
            webViewRef.current.reload()
            setRefreshing(true)
        }
    }, [source])
    const onLoadEnd = React.useCallback(() => {
        setRefreshing((currentRefreshing) => {
            if (currentRefreshing) {
                return false
            }
            return currentRefreshing
        })
    }, [])
    const onScroll = React.useCallback((event: WebViewScrollEvent) => {
        const y = event.nativeEvent.contentOffset.y
        if (y < 10) {
            if (!isAtTop) {
                setIsAtTop(true)
            }
        } else {
            if (isAtTop) {
                setIsAtTop(false)
            }
        }
    }, [isAtTop])
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView
                style={styles.safeViewStyle}
            >
                <View
                    style={styles.addressBarContainerStyle}
                >
                    <View
                        style={styles.textInputContainerStyle}
                    >
                        <TextInput
                            style={styles.textInputStyle}
                            autoCorrect={false}
                            spellCheck={false}
                            underlineColorAndroid={'transparent'}
                            value={typingAddress}
                            keyboardType={'url'}
                            selectTextOnFocus={true}
                            autoCapitalize={'none'}
                            clearButtonMode={'while-editing'}
                            onSubmitEditing={onGo}
                            onChangeText={onChangeTypingAddress}
                            returnKeyLabel={'Go'}
                            keyboardAppearance={'default'}
                        />
                    </View>
                </View>
                <ScrollView
                    contentInsetAdjustmentBehavior={'automatic'}
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContentContainerStyle}
                    keyboardShouldPersistTaps={'never'}
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        enabled={isAtTop}
                    />}
                >
                    <WebView
                        style={styles.webViewStyle}
                        ref={webViewRef}
                        source={source}
                        onLoadEnd={onLoadEnd}
                        onScroll={onScroll}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

type Style = {
    safeViewStyle: ViewStyle
    addressBarContainerStyle: ViewStyle
    textInputContainerStyle: ViewStyle
    textInputStyle: ViewStyle
    scrollView: ViewStyle
    scrollContentContainerStyle: ViewStyle
    webViewStyle: ViewStyle
}

const styles = StyleSheet.create<Style>({
    safeViewStyle: {
        flex: 1,
        alignItems: 'stretch',
    },
    addressBarContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    textInputContainerStyle: {
        flex: 1,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        alignItems: 'stretch',
    },
    textInputStyle: {
        fontSize: 12,
        color: 'black',
        padding: 0,
        height: 20,
    },
    scrollView: {
        flex: 1,
    },
    scrollContentContainerStyle: {
        alignItems: 'stretch',
        flexGrow: 1,
    },
    webViewStyle: {
        flex: 1,
    },
})

export default App
