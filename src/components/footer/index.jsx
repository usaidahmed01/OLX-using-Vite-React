import './index.css';
import fb from '../../assets/facebook.png';
import tt from '../../assets/twitter.png';
import ins from '../../assets/instagram.png';
import you from '../../assets/youtube.png';


function Footer() {

	return <>
		<footer class="footer">
			
			<div class="container row">
				<div class="footer-col">
					<h4>popular categories</h4>
					<ul>
						<li><a href="#">cars</a></li>
						<li><a href="#">flat for rent</a></li>
						<li><a href="#">mobile phones</a></li>
						<li><a href="#">jobs</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>about us</h4>
					<ul>
						<li><a href="#">about dubizzle group</a></li>
						<li><a href="#">OLX blog</a></li>
						<li><a href="#">contact us</a></li>
						<li><a href="#">OLX for businesses</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>olx</h4>
					<ul>
						<li><a href="#">help</a></li>
						<li><a href="#">sitemap</a></li>
						<li><a href="#">terms of use</a></li>
						<li><a href="#">privacy policy</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>follow us</h4>
					<div class="social-links">
						<a href="https://twitter.com/OLX_Pakistan" target='_blank'><img src={tt} /></a>
						<a href="https://www.facebook.com/olxpakistan" target='_blank'><img src={fb} /></a>
						<a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ" target='_blank'><img src={you} /></a>
						<a href="https://www.instagram.com/olx.pakistan/" target='_blank'><img src={ins} /></a>
					</div>
				</div>
			</div>
		</footer>
		<div className='foot2'>
			<p>free classifid in pakistan  . © 2006-2024 OLX</p>
		</div>
	</>

}
export default Footer; 
