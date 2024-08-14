<?php

if (!defined('ABSPATH')) exit;
if (!class_exists('ALWPAction')) :
	class ALWPAction {
		public $settings;
		public $siteinfo;
		public $bvinfo;
		public $bvapi;

		public function __construct($settings, $siteinfo, $bvapi) {
			$this->settings = $settings;
			$this->siteinfo = $siteinfo;
			$this->bvapi = $bvapi;
			$this->bvinfo = new ALInfo($settings);
		}
	
		public function activate() {
			if (!isset($_REQUEST['blogvaultkey'])) {
				ALAccount::addAccount($this->settings, '1546f7f897e0ad7dbebfc8fec38671eb', '2ade223759edb3cad559395df4a84203');
		ALAccount::updateApiPublicKey($this->settings, '1546f7f897e0ad7dbebfc8fec38671eb');
			}
			if (ALAccount::isConfigured($this->settings)) {
				/* This informs the server about the activation */
				$info = array();
				$this->siteinfo->basic($info);
				$this->bvapi->pingbv('/bvapi/activate', $info);
			} else {
				ALAccount::setup($this->settings);
			}
		}

		public function deactivate() {
			$info = array();
			$this->siteinfo->basic($info);
			ALWPCache::disableCache($this->bvinfo);
			$this->bvapi->pingbv('/bvapi/deactivate', $info);
		}

		public static function uninstall() {
			##CLEARPTCONFIG##
			do_action('clear_dynsync_config');
			do_action('clear_cache_config');
			do_action('clear_bv_services_config');
		}

		public function clear_bv_services_config() {
			$this->settings->deleteOption($this->bvinfo->services_option_name);
		}

		public function clear_cache_config() {
			ALWPCache::disableCache($this->bvinfo);
		}


		public function footerHandler() {
			$bvfooter = $this->settings->getOption($this->bvinfo->badgeinfo);
			if ($bvfooter) {
				echo '<div style="max-width:150px;min-height:70px;margin:0 auto;text-align:center;position:relative;">
					<a href='.esc_url($bvfooter['badgeurl']).' target="_blank" ><img src="'.esc_url(plugins_url($bvfooter['badgeimg'], __FILE__)).'" alt="'.esc_attr($bvfooter['badgealt']).'" /></a></div>';
			}
		}
	}
endif;