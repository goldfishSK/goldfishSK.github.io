//
//  customCell.h
//  随手记
//
//  Created by Mac on 16/8/2.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface customCell : UITableViewCell
@property (weak, nonatomic) IBOutlet UILabel *cellOnlyLab;
@property (weak, nonatomic) IBOutlet UIImageView *_cellImg;
@property (weak, nonatomic) IBOutlet UILabel *_cellLab;
@property (weak, nonatomic) IBOutlet UILabel *dateLab;
@property (weak, nonatomic) IBOutlet UILabel *cellIMGlab;

@end
