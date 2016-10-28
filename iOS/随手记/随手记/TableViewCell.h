//
//  TableViewCell.h
//  随手记
//
//  Created by mac on 16/8/5.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface TableViewCell : UITableViewCell
@property (weak, nonatomic) IBOutlet UITextField *_textTF;
@property (weak, nonatomic) IBOutlet UIImageView *_bookImg;

@end
