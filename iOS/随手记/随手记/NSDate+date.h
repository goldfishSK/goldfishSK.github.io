//
//  NSDate+date.h
//  随手记
//
//  Created by Mac on 16/8/4.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import <Foundation/Foundation.h>
typedef NS_ENUM(NSInteger,DateType) {
    DateTypeToDay =0,
    DateTypeToweek,
    DateTypeTomonth,
    DateTypeToyear,
};


@interface NSDate (date)

+(NSString*)currentDateWithType:(DateType)type;
@end
