//
//  NSDate+date.m
//  随手记
//
//  Created by Mac on 16/8/4.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "NSDate+date.h"
@implementation NSDate (date)

+(NSString*)currentDateWithType:(DateType)type
{
    //格式化时间对应的时间表达式
    NSDateFormatter * formatter =[[NSDateFormatter alloc]init];
    formatter.locale =[[NSLocale alloc]initWithLocaleIdentifier:@"zh_cn"];
    [formatter setDateFormat:@"dd/E/M/yyyy"];
    NSString * dateStr =[formatter stringFromDate:[NSDate date]];
    NSLog(@"%@",dateStr);
    return nil;
}
@end
