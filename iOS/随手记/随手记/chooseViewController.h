//
//  chooseViewController.h
//  随手记
//
//  Created by Mac on 16/8/3.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "FMDatabase.h"
@interface chooseViewController : UIViewController
{
    NSMutableArray * _cellArr;
    FMDatabase * _db;
    NSIndexPath * selectRow;
}
@property (weak, nonatomic) IBOutlet UICollectionView *collectView;
@property(nonatomic,copy)NSString * textTF;
@property(nonatomic,copy)NSString * imgStr;
@property (weak, nonatomic) IBOutlet UITableView *_tableView;

@end
