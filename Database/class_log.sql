DROP TABLE IF EXISTS `class_log`;

CREATE TABLE IF NOT EXISTS `class_log` (
`id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`class` int(10),
`type` int(2),
`create_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
`create_by` int(10) NOT NULL,
`update_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
`update_by` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `class_log` 
    ADD FOREIGN KEY (`class`) REFERENCES `class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    ADD FOREIGN KEY (`create_by`) REFERENCES `account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    ADD FOREIGN KEY (`update_by`) REFERENCES `account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;