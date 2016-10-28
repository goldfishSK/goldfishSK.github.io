//
//  bookCell.h
//  随手记
//
//  Created by mac on 16/8/5.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface bookCell : UICollectionViewCell
@property (weak, nonatomic) IBOutlet UIImageView *YESImg;
@property (weak, nonatomic) IBOutlet UIImageView *bookImg;
@property(nonatomic,assign)BOOL isYES;
@property(nonatomic,copy)NSString * cellImgStr;

@end