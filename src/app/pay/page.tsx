"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
function pay() {
  const form = useForm();
  return (
    <div className="w-1/2 mx-auto">
      <Form {...form}>
        <div className="border-2 my-[30px] pt-[20px]">
          <FormField
            name="productDetails"
            render={() => (
              <FormItem>
                <FormLabel className="my-[20px] text-xl font-bold ml-[20px]">
                  주문 상품
                </FormLabel>
                <FormControl>
                  <>
                    <div className="flex flex-wrap ">
                      <p className="mx-[30px]">
                        <img
                          src="https://placehold.co/150x150"
                          alt="상품 이미지"
                        />
                      </p>
                      <div className="leading-9">
                        <div className="flex w-[300px] items-center ">
                          <Label className="mr-[10px]">품명</Label>
                          <p>땡땡땡 셔츠</p>
                        </div>
                        <div className="flex w-[300px] items-center">
                          <Label className="mr-[10px]">색상</Label>
                          <p>레드</p>
                        </div>
                        <div className="flex w-[300px] items-center">
                          <Label className="mr-[10px]">수량</Label>
                          <p>1개</p>
                        </div>
                        <div className="flex w-[300px] items-center">
                          <Label className="mr-[10px]">가격</Label>
                          <p>30,000원</p>
                        </div>
                      </div>
                    </div>
                    <FormMessage />
                  </>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="shippingFee"
            render={({ field }) => (
              <FormItem className="flex bg-gray-100 pl-[20px] py-[10px] mt-[20px] justify-between items-center">
                <FormLabel className="w-[150px]">배송비</FormLabel>
                <FormControl>
                  <p className="pr-[20px] translate-y-[-3px]">+ 2500원</p>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="customerInfo"
          render={() => (
            <FormItem className="border-2 my-[30px] leading-9 pt-[20px]">
              <FormLabel className="mt-[20px] mb-[10px] text-xl font-bold ml-[20px]">
                주문자 정보
              </FormLabel>
              <FormControl>
                <>
                  <h4 className=" ml-[20px]">김나나</h4>
                  <h4 className=" ml-[20px] pb-[20px]">010-1234-5678</h4>
                  <FormMessage />
                </>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="couponInfo"
          render={() => (
            <FormItem className="border-2 my-[30px] leading-9 pt-[20px]">
              <FormLabel className="mt-[20px] mb-[10px] text-xl font-bold ml-[20px]">
                쿠폰 / 적립금
              </FormLabel>
              <FormControl>
                <>
                  <div className="flex mb-[20px]">
                    <h4 className=" ml-[20px] mr-[10px]">쿠폰</h4>
                    <h4>미사용</h4>
                    <Button type="button" className="ml-[10px] mb-[10px]">
                      쿠폰 적용
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between w-full ml-[20px] mb-[20px]">
                    <p className="w-[60px] ">적립금</p>
                    <div className="flex  w-[calc(100%-60px)] ">
                      <Input type="text" className="  text-right" />
                      <Button type="button" className="mr-[40px]  ml-[10px]">
                        적립금 사용
                      </Button>
                    </div>
                    <div className="w-full flex justify-end mr-[40px]">
                      <p className="mr-[10px] mb-[20px]">보유 적립금</p>
                      <p>3,000</p>
                    </div>
                  </div>
                </>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="payInfo"
          render={() => (
            <FormItem className="border-2 my-[30px] leading-9 pt-[20px]">
              <FormLabel className="mt-[20px] mb-[10px] text-xl font-bold ml-[20px]">
                결제 정보
              </FormLabel>
              <FormControl>
                <>
                  <div className="leading-9 flex flex-wrap justify-center mx-[20px]">
                    <div className="flex w-full justify-between ">
                      <h4 className="mr-[10px]">주문 상품</h4>
                      <h4>30,000원</h4>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="mr-[10px]">배송비</p>
                      <p>+2,500원</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="mr-[10px]">쿠폰할인</p>
                      <p>-1,000원</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="mr-[20px]">적립금 사용</p>
                      <p>-3,000원</p>
                    </div>
                  </div>
                  <div className="flex bg-gray-100 font-bold pl-[20px] py-[10px] px-[10px] mt-[20px] justify-between">
                    <h4 className="mr-[10px]">최종 결제 금액</h4>
                    <h4>28,500원</h4>
                  </div>
                </>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="border-2 mt-[30px] leading-9 py-[20px]">
              <FormLabel className="mt-[20px] mb-[20px] text-xl font-bold ml-[20px]">
                결제 수단
              </FormLabel>
              <FormControl>
                <RadioGroup {...field} className="ml-[20px]">
                  <div className="flex items-center space-x-2 mb-[10px]">
                    <RadioGroupItem value="card" />
                    <Label>신용카드</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-[10px]">
                    <RadioGroupItem value="deposit" />
                    <Label>무통장 입금</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-[10px]">
                    <RadioGroupItem value="phone_payment" />
                    <Label>핸드폰 결제</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage className="ml-[20px]">
                결제 수단을 선택해주세요.
              </FormMessage>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full my-[20px]">
          결제하기
        </Button>
      </Form>
    </div>
  );
}

export default pay;