-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for phone_store
DROP DATABASE IF EXISTS `phone_store`;
CREATE DATABASE IF NOT EXISTS `phone_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `phone_store`;

-- Dumping structure for table phone_store.customer
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `uq_customer_email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table phone_store.customer: ~5 rows (approximately)
INSERT INTO `customer` (`customer_id`, `first_name`, `last_name`, `email`, `updated_at`, `deleted_at`) VALUES
	(1, 'John', 'Doe', 'john.doe@gmail.com', NULL, NULL),
	(2, 'Jane', 'Smith', 'jane.smith@yahoo.com', NULL, NULL),
	(3, 'Michael', 'Johnson', 'michael.johnson@gmail.com', NULL, NULL),
	(4, 'Emily', 'Davis', 'emily.davis@outlook.com', NULL, NULL),
	(5, 'David', 'Brown', 'david.brown@dev.com', NULL, NULL);

-- Dumping structure for table phone_store.phone
DROP TABLE IF EXISTS `phone`;
CREATE TABLE IF NOT EXISTS `phone` (
  `phone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `screen` varchar(100) NOT NULL,
  `cpu` varchar(30) NOT NULL,
  `battery` varchar(30) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` double unsigned NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`phone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table phone_store.phone: ~10 rows (approximately)
INSERT INTO `phone` (`phone_id`, `name`, `screen`, `cpu`, `battery`, `img`, `price`, `updated_at`, `deleted_at`) VALUES
	(1, 'iPhone 15 Pro', '6.1-inch OLED', 'A17 Pro', '3274mAh', 'https://istyle.rs/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__en-us.jpg', 999.99, NULL, NULL),
	(2, 'iPhone 15 Pro Max', '6.7-inch OLED', 'A17 Pro', '4441mAh', 'https://www.tehnomedia.rs/image/100132.jpg?tip=webp&tip_slike=0', 1099.99, NULL, NULL),
	(3, 'iPhone 14 Pro', '6.1-inch Super Retina XDR', 'A16 Bionic', '3200mAh', 'https://istyle.rs/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/z/czcs_iphone14promax_q422_deep-purple_pdp-images_position-1a_t_4_3_1.jpg', 899.99, NULL, NULL),
	(4, 'iPhone 13 Pro Max', '6.7-inch Super Retina XDR', 'A15 Bionic', '4352mAh', 'https://istyle.rs/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_13_pro_max_sierra_blue_pdp_image_position-1a__wwen_5_2.jpg', 1099, NULL, NULL),
	(5, 'Samsung Galaxy S22 Ultra', '6.8-inch Dynamic AMOLED 2X', 'Exynos 2200', '5000mAh', 'https://www.tehnomedia.rs/image/86746.jpg?tip=webp&tip_slike=0', 1199.99, NULL, NULL),
	(6, 'Samsung Galaxy S21 FE', '6.4-inch Dynamic AMOLED 2X', 'Exynos 2100', '4500mAh', 'https://www.tehnomedia.rs/image/92431.jpg?tip=webp&tip_slike=0', 699.99, NULL, NULL),
	(7, 'Honor Magic4 Pro', '6.81-inch LTPO OLED', 'Snapdragon 8 Gen1', '4600mAh', 'https://cdn.dxomark.com/wp-content/uploads/medias/post-113428/Honor-Magic4-Pro_cyan_2featured-image-packshot-review-Recovered-Recovered.jpg', 899, NULL, NULL),
	(8, 'Honor Magic3 Pro+', '6.76-inch OLED', 'Snapdragon 888+', '4600mAh', 'https://www.dxomark.cn/wp-content/uploads/medias/post-103700/Honor-Magic3-Pro-featured-image-packshot-review-Recovered-Recovered.jpg', 1099, NULL, NULL),
	(9, 'Honor 200 Pro', '6.78-inch OLED', 'Snapdragon 8s Gen 3', '5200mAh', 'https://cdn.dxomark.com/wp-content/uploads/medias/post-173224/honor_200_pro_featured_image_2.jpg', 500, NULL, NULL),
	(10, 'Samsung Galaxy Z Fold3', '7.6-inch Foldable Dynamic AMOLED 2X', 'Snapdragon 888', '4400mAh', 'https://polovnilaptopovi.rs/wp-content/uploads/2022/03/Untitled-8.png', 1799.99, NULL, NULL),
	(11, 'Samsung Galaxy Note20 Ultra', '6.9-inch Dynamic AMOLED 2X', 'Exynos 990', '4500mAh', 'https://mobiton.rs/wp-content/uploads/2021/06/IMG-df7ca52aa68a216dc763b1624c549360-V.jpg', 1299.99, NULL, NULL),
	(12, 'Samsung Galaxy S20', '6.2-inch Dynamic AMOLED 2X', 'Exynos 990', '4000mAh', 'https://dijaspora.shop/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/1/5/150493.jpg', 399.99, NULL, NULL);


-- Dumping structure for table phone_store.purchase
DROP TABLE IF EXISTS `purchase`;
CREATE TABLE IF NOT EXISTS `purchase` (
  `purchase_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone_id` int(10) unsigned NOT NULL,
  `customer_id` int(10) unsigned NOT NULL,
  `quantity` int(2) unsigned NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`purchase_id`),
  KEY `fk_purchase_phone_id` (`phone_id`),
  KEY `fk_purchase_customer_id` (`customer_id`),
  CONSTRAINT `fk_purchase_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_purchase_phone_id` FOREIGN KEY (`phone_id`) REFERENCES `phone` (`phone_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table phone_store.purchase: ~5 rows (approximately)
INSERT INTO `purchase` (`purchase_id`, `phone_id`, `customer_id`, `quantity`, `deleted_at`) VALUES
	(1, 1, 1, 2, NULL),
	(2, 2, 4, 1, NULL),
	(3, 3, 3, 1, NULL),
	(4, 10, 2, 3, NULL),
	(5, 5, 5, 1, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
