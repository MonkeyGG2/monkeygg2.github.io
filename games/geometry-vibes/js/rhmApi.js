var adsenseScript = document.createElement('script');
adsenseScript.async = true;
adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
adsenseScript.setAttribute('data-ad-client', 'ca-pub-8349441957149316');
//adsenseScript.setAttribute('data-adbreak-test', 'on');
adsenseScript.setAttribute('data-ad-frequency-hint', '60s');
adsenseScript.setAttribute('crossorigin', 'anonymous');
adsenseScript.setAttribute('data-ad-channel', '3932700710');
document.head.appendChild(adsenseScript);

window.adsbygoogle = window.adsbygoogle || [];

const adBreak = adConfig = function (o) {
    adsbygoogle.push(o);
}

var rewardReadyShowAds = null;

adConfig({
    preloadAdBreaks: 'on',
    sound: 'on',
    onReady: () => {
        console.log("AdConfig Ready");
    },
});

function InitSDKJs() {
    // Game start logic
    let adConfigPromise =
        new Promise((resolve, reject) => adConfig({
            preloadAdBreaks: 'on',
            onReady: () => resolve(true)
        }));
    let timeoutPromise =
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Ad timeout");
                resolve(false);
            }, 2000);
        });
    // Whatever happens first resolves this promise.
    Promise.race([
        adConfigPromise,
        timeoutPromise
    ]).then((shouldShowPreRoll) => {
        console.log("start game called");
        LoadRewardedAdsJs();
        myGameInstance.SendMessage('RHMAdsManager', 'InitSucceed', 'ca-pub-8349441957149316');
    });
}

function CallInterstitialAdsJs() {
    console.log("Intersititial Ads")
    adBreak({
        type: 'next',
        name: 'restart-game',
        beforeAd: () => {
            console.log("Pause Game")
            pauseGameBeforeAds()
        },
        afterAd: () => {
            console.log("Resume Game - After Ad")
        }, // Resume Game
        adBreakDone: (placementInfo) => {
            console.log("AdBreak Completed - AdBreak Done");
            resumeGameAfterAds()
        },
    });
}

function LoadRewardedAdsJs() {
    console.log("LoadRewardedAds");

    adBreak({
        type: 'reward', // ad shows at the start of the next level
        name: 'extra-life',
        beforeAd: () => {
        },
        afterAd: () => {
            console.log("afterAd");
        },
        beforeReward: (showAdFn) => {
            console.log("beforeReward");

        },
        adDismissed: () => {
            console.log("adDismissed");
        },
        adViewed: () => {
            console.log("adViewed");
        },
        adBreakDone: (placementInfo) => {
            console.log("adBreak complete ");
            console.log("Break Type = " + placementInfo.breakType);
            console.log("Break Name = " + placementInfo.breakName);
            console.log("Break Format = " + placementInfo.breakFormat);
            console.log("Break Status = " + placementInfo.breakStatus);

            // Check the breakStatus and call the appropriate function
            if (placementInfo.breakStatus === "notReady" || placementInfo.breakStatus === "timeout" || placementInfo.breakStatus === "frequencyCapped" ||
                placementInfo.breakStatus === "error" || placementInfo.breakStatus === "noAdPreloaded" || placementInfo.breakStatus === "other") {
                RewardedAdsNotLoaded();
            }
            else {
                RewardedAdsLoaded();
            }
        },
    });
}

function CallRewardedAdsJs() {
    console.log("Call Rewarded Ads");

    adBreak({
        type: 'reward', // ad shows at the start of the next level
        name: 'extra-life',
        beforeAd: () => {
            console.log("beforeAd");
            pauseGameBeforeAds();
        }, // You may also want to mute the game's sound.
        afterAd: () => {
            console.log("afterAd");
        }, // resume the game flow.
        beforeReward: (showAdFn) => {
            console.log("beforeReward");
            showAdFn();
        },
        adDismissed: () => {
            console.log("adDismissed");
            RewardedAdsDismissed();
        },
        adViewed: () => {
            console.log("adViewed");
            RewardSuccessful();
        },
        adBreakDone: (placementInfo) => {
            console.log("adBreak complete ");
        },
    });
}

function RewardedAdsLoaded() {
    console.log("Rewarded Ads Available")
    myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'true');
}

function RewardedAdsNotLoaded() {
    console.log("Rewarded Ads Not Available")
    myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'false');
}

function RewardedAdsDismissed() {
    console.log("Reward Dismissed")
    myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsFailed');
}

function RewardSuccessful() {
    console.log("gainReward")
    myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsSuccessfull');
}

function pauseGameBeforeAds() {
    myGameInstance.SendMessage('RHMAdsManager', 'pauseGame');
}

function resumeGameAfterAds() {
    myGameInstance.SendMessage('RHMAdsManager', 'resumeGame');
}
