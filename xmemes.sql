CREATE DATABASE xmemes;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);


INSERT INTO `posts` (`id`, `name`, `caption`, `url`) VALUES
(1, 'Lolo', 'Konichiwa','https://timesofindia.indiatimes.com/thumb/msid-78679348,width-1200,height-900,resizemode-4/.jpg');
(2, 'Momo', 'Salama Pagi','https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg'),
(4, 'Popo', 'Hello','https://3c534w2w7sa3ma8ved14ax12-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png');

-- CREATE DATABASE xmemes;
-- GRANT ALL ON xmemes.* TO 'root'@'localhost' IDENTIFIED BY '';
-- GRANT ALL ON xmemes.* TO 'root'@'127.0.0.1' IDENTIFIED BY '';