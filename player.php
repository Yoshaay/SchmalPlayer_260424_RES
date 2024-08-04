<?php
	/*
	Plugin Name: SchmalPlayer
	Description: Dieser Player spielt besonders schmale Audiofiles
	Version: 1.8.15
	Author: Yoshy
	*/
	
	//Icecast-Shortcode
	function icecast_stream_shortcode() {
	ob_start(); ?>
		<div class="icecast-stream-player">
			<icecast-web></icecast-web>
		</div>
<?php
	return ob_get_clean();
	}
	
	//Shortcode hinzufügen, um den Icecast-Stream einzubinden
	add_shortcode('icecast_stream', 'icecast_stream_shortcode');
	
	function icecast_stream_scripts() {
		//Web-Component
		wp_enqueue_script('icecast-stream-player', plugin_dir_url(__FILE__) . 'IcecastWeb.js', array('jquery'), '1.0', true);
		
		//wp_enqueue_script('icecast-stream-player', plugin_dir_url(__FILE__) . 'icecast-stream.js', array('jquery'), '1.0', true);
	}
	add_action('wp_enqueue_scripts', 'icecast_stream_scripts');
	
	function enqueue_custom_styles() {
		
		wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
		
		// Plugin-Verzeichnis-Pfad zur CSS-Datei
		$plugin_css_url = plugin_dir_url(__FILE__) . 'style.css';
		// Einbinden der CSS-Datei
		wp_enqueue_style('custom-style', $plugin_css_url);
	}
	add_action('wp_enqueue_scripts', 'enqueue_custom_styles');
	