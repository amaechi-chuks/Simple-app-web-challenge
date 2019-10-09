'use strict';
let pconts, equalizer;
equalizer = "https://media3.giphy.com/media/8L0Pbbkno5BI8n4CaI/source.gif";

onload = () => {
    const playlist = document.getElementById('playlist');
    music_info.forEach((music) => {
         playlist.innerHTML += `<div class='music_info'>
        <img id='music_image' src=${music[3]}>
         <p class='artiste'>${music[0]} <img id='equal' src=${equalizer} style='dislay:none;'></p>
        <p class='title'>${music[1]}</p>
         </div>`;
    })
    const music_info_div = document.querySelectorAll('.music_info');
    for (let i = 0; i < music_info_div.length; i++) {
        music_info_div[i].onclick = () => {
            document.getElementById('playing_img').src = music_info[i][3];
            document.getElementById('pconts').src = music_info[i][2];
            document.getElementById('pconts').play();
        }

    }
} // onload ends

const music_info = [
    // ALIGNMENT :  artist, title, link, image
    ['Taylor Swift', 'Look what you made me do', 'http://dl.rayanmusic.ir/Music/2017/Taylor%20Swift/Taylor%20Swift%20-%20Look%20What%20You%20Made%20Me%20Do%20%5Brayanmusic.ir%5D.mp3', 'https://upload.wikimedia.org/wikipedia/en/6/68/Taylor_Swift_-_Look_What_You_Made_Me_Do.png'],
    
    ['Eminem ft Ed sheeran', 'River', 'https://livemuz.kz/uploads/mp3/6/822-eminem-river-ft.-ed-sheeran.mp3', 'https://d2tml28x3t0b85.cloudfront.net/tracks/artwork/584e8b20e72811e7a02075cd9e8c68ab/592b7da0e72811e7aa5a75c9a7006b5f-Blogger_Remix_Chat__-_Create_post_-_2017-12-22_08.50.42.png'],

    ['Chris brown ft LilDicky', 'Freaky friday', 'http://dl.faazmusic.com/server/1396/4tir/29/Billboard%20Hot%20100%20Songs%20-%2025th%20June%202018%20-%20MP3%20320/37.%20Lil%20Dicky%20-%20Freaky%20Friday%20(feat.%20Chris%20Brown)%20(2).mp3', 'https://i.ytimg.com/vi/kejNJmTKiRw/maxresdefault.jpg'],

    ['Taylor swift ', 'Love Story', 'https://api.ning.com/files/RC5KYTKowBamvIF5XmqkAbec8YGNFoTJcaLhB5eCYSqzgpRe*Uo6blZAixF5dZNG6nh8pjon9jOVlQ1zY58h5d6fADH*tC45/pZOsoKSoqq-amKegpKycq6Whpa01.mp3', 'https://i.pinimg.com/originals/57/f3/ed/57f3ed3a8e02fae86073703b2486f3f4.jpg'],

    ['Cardi B', 'Like that', 'http://portal.ekniazi.com/The%20Official%20UK%20Top%2040%20Singles%20Chart%20(13.07.2018)%20Mp3%20(320kbps)%20%5BHunter%5D/The%20Official%20UK%20Top%2040%20Singles%20Chart%20(13.07.2018)/09.%20Cardi%20B,%20Bad%20Bunny%20&%20J%20Balvin%20-%20I%20Like%20It.mp3', 'https://upload.wikimedia.org/wikipedia/en/8/82/Cardi_B%2C_Bad_Bunny_and_J_Balvin_-_I_Like_It_%28Single_Cover%29.png'],

    ['L.a.k', 'Panda | Rap freestyle', '', 'https://i.ytimg.com/vi/97Db8FPmvvE/hqdefault.jpg'],

    ['Tyga ft Wale, Kurupt Bitch and YG', 'Bitch better have my money', 'https://a.tumblr.com/tumblr_m6uwwxDfWr1rp6pd8o1.mp3', 'https://f4.bcbits.com/img/a3349718494_16.jpg'],

    ['Taylor Swift', '22', 'http://tegos.ru/new/mp3_full/Taylor_Swift_-_22.mp3', 'https://assets.vogue.com/photos/5d41d0c6f8640b00082a11e6/master/pass/VO090119_FRONT_no_coverlines.jpg'],

    ['Taylor Swift', 'Haunted', 'https://api.ning.com/files/mgrl1oZs-vCNMt4ZMcy3hO27cWOuK1qfadAb7-Sns3JMtgBPSc0sOMrmWNtUthjRH6Z5SSOexaiVHPVTXqt*z*TtZ*AD*SB6/TaylorSwiftHaunted.mp3', 'https://i.pinimg.com/originals/57/f3/ed/57f3ed3a8e02fae86073703b2486f3f4.jpg'],

    ['30-seconds-to-mars-feat.-halsey', 'love-is-madness', 'https://livemuz.kz/uploads/mp3/6/0-30-seconds-to-mars-feat.-halsey-love-is-madness.mp3', 'https://c-sf.smule.com/sf/s77/arr/f7/a9/1c7136ad-91dd-4686-9ae4-ab453cb2d86a_512.jpg']

];