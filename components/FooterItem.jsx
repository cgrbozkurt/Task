import Link from 'next/link'
import React from 'react'
import { svg } from './svg'

const FooterItem = () => {
  return (
    
          <footer className='flex flex-col gap-20 lg:p-20'>
          <div className='footer-top flex lg:flex-row flex-col justify-between'>
              <div className='mb-3 text-[16px] gap-5  flex flex-col'>
      <h1 className='font-bold'>Terapin</h1>
      <div className='flex flex-col'>
      <div><a href="#">Nasıl Çalışır?</a></div>
      <div><a href="#">Hakkımızda</a></div>
      <div><a href="#">Psikologlarımız</a></div>
      <div><a href="#">Kurumsal</a></div>
      <div><a href="#">S.S.S.</a></div>
      <div><a href="#">Testler</a></div>
      <div><a href="#">Blog</a></div>
      <div><a href="#">Terapist Başvurusu</a></div>
    </div> 
      </div>
    
            <div className='mb-3 text-[16px] gap-5 flex flex-col  '>
      <h1 className='font-bold'>Testler</h1>
      <div className='flex flex-col'>
      <a href="#">Schutte Duygusal Zeka Ölçeği</a>
      <a href="#">Beck Depresyon Testi</a>
      <a href="#">Empati Ölçeği</a>
      <a href="#">Beyaz Ayı Supresyon Envanteri</a>
      <a href="#">Warwick - Edinburgh Mental İyi Oluş Ölçeği</a>
      <a href="#">Yeme Tutumu Testi</a>
      <a href="#">Liebowitz Sosyal Fobi Belirtileri Ölçeği</a>
      <a href="#">Beck Anksiyete Ölçeği</a>
    </div> 
      </div>
    
            <div className='mb-3 text-[16px] gap-5 flex flex-col'>
      <h1 className='font-bold'>Yasal</h1>
      <div className='flex flex-col'>
      <a href="#">Kullanıcı Sözleşmesi</a>
      <a href="#">Çerez ve Gizlilik Politikaları</a>
      <a href="#">KVKK Aydınlatma Metni</a>
    </div> 
      </div>
    
            <div className='mb-3 text-[16px] gap-5 flex flex-col'>
      <h1 className='font-bold'>Uygulamayı İndir</h1>
      <div className='flex flex-col gap-3' >
      <a href="https://apps.apple.com/tr/app/terappin/id1532600151" target="_blank" id="downloadAppStoreFooter" title="Terappin uygulamasını Google Play'den indir">
<img data-src="https://terappin.com/images/market-icons/app_store_download.webp" width="140" height="45" class=" lazyloaded" alt="Terappin uygulamasını App Store'dan indir" src="https://terappin.com/images/market-icons/app_store_download.webp"/>
</a>
<a href="https://play.google.com/store/apps/details?id=com.terappin" title="Terappin uygulamasını Google Play'den indir" id="downloadPlaySotoreFooter" target="_blank">
<img data-src="https://terappin.com/images/market-icons/google_play_download.webp" width="140" height="45" class=" lazyloaded" alt="Terappin uygulamasını Google Play'den indir" src="https://terappin.com/images/market-icons/google_play_download.webp"/>
</a>
<a href="https://appgallery.huawei.com/app/C106865371" id="downloadHuaweiAppGallery" title="Terappin uygulamasını Huawei App Gallery'den indir" target="_blank">
<img data-src="https://terappin.com/images/market-icons/huawei_app_gallery_download.webp" width="140" height="45" class=" lazyloaded" alt="Terappin uygulamasını Huawei App Gallery'den indir" src="https://terappin.com/images/market-icons/huawei_app_gallery_download.webp"/>
</a>
      
    </div> 
      </div>

      <div className='item-terappin flex flex-col gap-5'>
        <div>{svg[0].terappin}</div>
        <div className='icons flex gap-3'>
        <a href="https://instagram.com/terappin.online" target="_blank" class="social_button">
<img class="footer-social-icon lazyloaded" data-src="https://terappin.com/new-site/images/icons/social/instagram.svg" width="39" height="39" alt="Terappin Instagram" src="https://terappin.com/new-site/images/icons/social/instagram.svg"/>
</a>
<a href="https://twitter.com/Terappinonline" target="_blank">
<img class="footer-social-icon lazyloaded" data-src="https://terappin.com/new-site/images/icons/social/twitter.svg" width="39" height="39" alt="Terappin Twitter" src="https://terappin.com/new-site/images/icons/social/twitter.svg"/>
</a>
<a href="https://facebook.com/terappin" target="_blank">
<img class="footer-social-icon lazyloaded" data-src="https://terappin.com/new-site/images/icons/social/facebook.svg" width="39" height="39" alt="Terappin Facebook" src="https://terappin.com/new-site/images/icons/social/facebook.svg"/>
</a>
<a href="https://linkedin.com/company/terappin/" target="_blank">
<img class="footer-social-icon lazyloaded" data-src="https://terappin.com/new-site/images/icons/social/linkedin.svg" width="39" height="39" alt="Terappin LinkedIn" src="https://terappin.com/new-site/images/icons/social/linkedin.svg"/>
</a>
<a href="https://www.youtube.com/channel/UC0_dl0MQ-m9WmYj9Q-chrpg/featured" target="_blank">
<img class="footer-social-icon ls-is-cached lazyloaded" data-src="https://terappin.com/new-site/images/icons/social/youtube.svg" width="39" height="39" alt="Terappin Youtube Kanalı" src="https://terappin.com/new-site/images/icons/social/youtube.svg"/>
</a>
        </div>
        <div className='gap-5'>
        <div class="">
<img class=" ls-is-cached lazyloaded" data-src="https://terappin.com/new-site/images/etbis.webp" width="79" height="92" alt="Terappin ETBİS" src="https://terappin.com/new-site/images/etbis.webp"/>
</div>
<p className=' text-[12px] my-2'>Copyright © 2023</p>
<p className=' text-[12px] my-2'>Terappin Teknoloji A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    
          </div>

          <div className="footer-bottom flex justify-between">
            <div className="bottom-left">
            <img data-src="https://terappin.com/new-site/images/ssl.png" data-cfsrc="https://terappin.com/new-site/images/ssl.png" width="158" height="41" alt="Güvenlik şifrelemesi" class="img-fluid lazyloaded" src="https://terappin.com/new-site/images/ssl.png"/>
            </div>
            <div className="bottom-right">
            <img data-src="https://terappin.com/new-site/images/bitmap.png" data-cfsrc="https://terappin.com/new-site/images/bitmap.png" width="456" height="32" alt="Terappin ödeme yöntemleri" class="img-fluid lazyloaded" src="https://terappin.com/new-site/images/bitmap.png"/>
            </div>
          </div>
          </footer>
  )
}

export default FooterItem